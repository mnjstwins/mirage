import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
	selector: 'match-phase-prefix-query',
	template: 	`<div class="form-group form-element col-xs-12">
					<input type="text" class="form-control col-xs-12"
						[(ngModel)]="inputs.input.value" 
					 	placeholder="{{inputs.input.placeholder}}"
					 	(keyup)="setFormat();" />
				</div>`,
	inputs: ['queryName', 'fieldName', 'getQueryFormat']
})

export class Match_phase_prefixQuery implements OnInit {
	@Input() queryName;
	@Input() fieldName;
	@Output() getQueryFormat = new EventEmitter<any>();
	
	public inputs: any = {
		input: {
			placeholder: 'Prefix',
			value: ''
		}
	};
	public queryFormat: any = {};

	ngOnInit() {
		this.setFormat();	
	}

	// QUERY FORMAT
	/*
		Query Format for this query is
		@queryName: {
			@fieldName: @value
		}
	*/
	setFormat() {
		this.queryFormat[this.queryName] = {};
		this.queryFormat[this.queryName][this.fieldName] = this.inputs.input.value;
		this.getQueryFormat.emit(this.queryFormat);
	}

}
