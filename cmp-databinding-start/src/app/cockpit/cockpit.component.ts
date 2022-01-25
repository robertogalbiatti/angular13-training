import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  //para lembrar: estamos passando algo para fora do componente, do filho para o pai (decorator @Output)
  //isso abaixo é uma propriedade em Angula, serverCreated é um evento, e evento possui essa estrutura no Angular
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();;
  // newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

    onAddServer(nameInput: HTMLInputElement) {
    // console.log(nameInput.value);
    this.serverCreated.emit({serverName: nameInput.value, serverContent: this.newServerContent});
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({serverName: nameInput.value, serverContent: this.newServerContent});
  }

}
