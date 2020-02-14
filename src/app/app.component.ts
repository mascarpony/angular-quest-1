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

  nicknameToSearch: string;

  public onSubmit() {
    this.nicknameToSearch = this.nicknameForm.value.nickname;
    this.nicknameForm.reset();
  }
}
