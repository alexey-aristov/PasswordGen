import { Component, ViewChild } from '@angular/core';
import { NgbModule, NgbPopover } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  PrevioslyGenerated: LoginPassword[];

  Current: LoginPassword;

  CharsCount: number = 6;
  @ViewChild('copyPopover') public copyPopover: NgbPopover;

  AvailableRules: RuleWrap[] = [
    new RuleWrap(new LowerCaseCharsRule(), "Lower case", true),
    new RuleWrap(new UpperCaseCharsRule(), "Upper case", true),
    new RuleWrap(new NumberCaseCharsRule(), "Numbers", true),
    new RuleWrap(new SpecialCaseCharsRule(), "Special characters", true)];

  constructor() {
    this.PrevioslyGenerated = [];
    this.Current = new LoginPassword();
  }

  Generate() {

    this.Current.Password = this.GenerateWithRules(
      this.AvailableRules
        .filter((ruleview) => ruleview.Checked == true)
        .map((ruleview) => ruleview.Rule),
      this.CharsCount);
    this.Current.Time = new Date();
  }

  GenerateWithRules(rules: CharsRule[], length: number) {
    let out: string = "";
    if (length < rules.length) {
      throw `length of password should be more or equal to rules count.values:length '${length}', rules count:'${rules.length}'.`;
    }

    if (rules.length <= 0) {
      throw `rules count should be more then zero.`;
    }

    while (out.length < length) {
      for (const rule of rules) {
        if (out.length < length) {
          var charPosInRule = Math.floor(Math.random() * rule.Chars.length);
          var newChar = rule.Chars.substring(charPosInRule, charPosInRule + 1);
          out += newChar;
        } else {
          break;
        }
      }
    }
    return out;
  }

  SwitchToNew() {
    if (!this.Current.Login && !this.Current.Password) {
      return;
    }
    if (!this.Current.Time) {
      this.Current.Time = new Date();
    }
    this.PrevioslyGenerated.push(this.Current);
    this.Current = new LoginPassword();
  }

  OnCopied() {
    this.copyPopover.open();
    setTimeout(() => this.copyPopover.close(), 5000)
  }
}

class RuleWrap {
  Rule: CharsRule;
  Name: string;
  Checked: boolean;

  constructor(rule: CharsRule, name: string, checked: boolean) {
    this.Rule = rule;
    this.Name = name;
    this.Checked = checked;
  }
}

class LoginPassword {
  Login: string;
  Password: string;
  Time: Date
}

interface CharsRule {
  Chars: string;
}

class LowerCaseCharsRule implements CharsRule {
  Chars: string = "abcdefghijklmnopqrstuvwxyz"
}

class UpperCaseCharsRule implements CharsRule {
  Chars: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}

class NumberCaseCharsRule implements CharsRule {
  Chars: string = "0123456789"
}

class SpecialCaseCharsRule implements CharsRule {
  Chars: string = "!\"#$%&'()*+,-./:;<=>?@[]^_`{}~"
}