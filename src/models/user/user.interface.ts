import { Request } from "express";

export interface RequestUser extends Request {
	user: IUser;
}

export interface IUser {
	tz: string;
	pernr: string;
	roles: string[]
	analyticsId: string;
}

export interface ResponseUser {
	first_name: string;
	last_name: string;
	_id: string;
	tz: string;
	status: ConvertedField;
	tashBenefits?: TashBenefit[];
	tashRequests?: TashRequest[];
	service_type: ConvertedField;
	number_of_children: number;
	tashStatus?: ConvertedField; //TODO: check the real name of this field
}

interface ConvertedField {
	code: string;
	description: string;
}

interface TashRequest {
	tashRequest: string;
	statusRequest: string;
	startDateRequest: string;
	endDateRequest: string;
}

interface TashBenefit {
	tashBenefit: ConvertedField;
	statusBenefit: ConvertedField;
	reasonStatusBenefit: ConvertedField;
	startDateBenefit: string;
	endDateBenefit: string;
	updateTime: string;
}
