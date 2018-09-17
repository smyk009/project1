import { Component } from "@angular/core";

@Component({
    selector : 'app-server', 
    templateUrl : './server.component.html'
})
export class ServerComponent{
    serverName : string = 'Server1';
    serverId : number = 1;
    serverStatus : String = 'offline';
    allowAddServer : boolean = false;
    createServerStatus : String = 'Server Existing';
    inputName = 'Server1';

    constructor(){
        setTimeout(() => {
            this.allowAddServer = true;
        }, 2000);
    }

    getServerStatus(){
        return this.serverStatus;
    }

    onAddServer(){
        this.createServerStatus = 'New Server Added, with name : ' + this.inputName;
    }

    onInputServer(event : any){
        this.inputName = (<HTMLInputElement>event.target).value;
    }

}