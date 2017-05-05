import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Option } from './../../services/option/option';
import { OptionService } from "./../../services/option/option.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  providers: [OptionService]
})

export class FooterComponent implements OnInit {

  option:Option

  constructor(
    private optionService: OptionService,
    private router: Router
  ) { }

  getOption(){
    this.optionService
    .getOption()
    .subscribe(
      res=>{
        this.option=res;
    }
    );
  }

  ngOnInit() {
    this.getOption();
  }

}
