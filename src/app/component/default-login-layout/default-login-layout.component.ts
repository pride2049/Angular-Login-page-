import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-default-login-layout',
  standalone: true,
  imports: [],
  templateUrl: './default-login-layout.component.html',
  styleUrl: './default-login-layout.component.scss',
})
export class DefaultLoginLayoutComponent {
  @Input() tittle: string = '';
  @Input() primaryBtnText: String = '';
  @Input() secondaryBtnText: String = '';
}
