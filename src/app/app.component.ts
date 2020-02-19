import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nicknameForm: FormGroup = new FormGroup({
    nickname: new FormControl(''),
  });

  uniqueNicknames: Set<string>;

  isError: boolean = false;

  public onSubmit(): void {
    this.isError = false;
    const nicknames: [] = this.nicknameForm.value.nickname
      .split(',')
      .map((nickname: string) => nickname.trim());
    this.uniqueNicknames = new Set(nicknames);
    this.nicknameForm.reset();
  }

  onError(): void {
    this.isError = true;
  }
}
