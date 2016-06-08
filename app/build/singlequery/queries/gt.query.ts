import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
	selector: 'gt-query',
	template: 	`<div class="form-group form-element col-xs-12">
					<input type="text" class="form-control col-xs-12"
						[(ngModel)]="inputs.gt.value" 
					 	placeholder="{{inputs.gt.placeholder}}"
					 	(keyup)="setFormat();" />
				</div>`,
	inputs: ['queryName', 'fieldName', 'getQueryFormat']
})

export class GtQuery implements OnInit {
	@Input() queryName;
	@Input() fieldName;
	@Output() getQueryFormat = new EventEmitter<any>();
	
	public inputs: any = {
		gt: {
			placeholder: 'Greater than',
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
		range: {
			@fieldName: {
				gt: @from_value
			}
		}
	*/
	setFormat() {
		this.queryFormat['range'] = {};
		this.queryFormat['range'][this.fieldName] = {
			gt: this.inputs.gt.value,
		};
		this.getQueryFormat.emit(this.queryFormat);
	}

}
