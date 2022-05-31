import { serializable, alias, object, list, primitive } from "serializr";
import { BadgeTypes } from "../../enums/badgeTypes";
import { VendorTypes } from "../../enums/vendorTypes";

class PurchaseListVendorModel {
  @serializable(alias("id", primitive()))
  id?: number;

  @serializable(alias("logo_url", primitive()))
  logoUrl?: string;

  @serializable(alias("name", primitive()))
  name?: string;

  @serializable(alias("type", primitive()))
  type?: string;

  @serializable(alias("instore_name", primitive()))
  instoreName?: string;
}

export class PurchaseListFilterModel {

  @serializable(alias("vendor_id", primitive()))
  vendorId?: string;

  @serializable(alias("vendor_name", primitive()))
  vendorName?: string;

  @serializable(alias("created_at", primitive()))
  createdAt?: string;

  @serializable(alias("customer_name", primitive()))
  customerName?: string;

  @serializable(alias("customer_payment_status", primitive()))
  customerPaymentStatus?: string;

  @serializable(alias("purchase_status", primitive()))
  purchaseStatus?: string;

  @serializable(alias("national_id", primitive()))
  nationalId?: number;

  @serializable(alias("search", primitive()))
  search?: string;
}

export class PurchaseListModel {
  @serializable(alias("id", primitive()))
  id?: number;

  @serializable(alias("purchase_id", primitive()))
  purchaseId?: string;

  @serializable(alias("created_at", primitive()))
  createdAt?: string;

  @serializable(alias("customer_name", primitive()))
  customerName?: string;

  @serializable(alias("vendor", object(PurchaseListVendorModel)))
  vendor?: PurchaseListVendorModel;

  @serializable(alias("total_amount", primitive()))
  totalAmount?: number;

  @serializable(alias("customer_payment_status", primitive()))
  customerPaymentStatus?: string;

  @serializable(alias("purchase_status", primitive()))
  purchaseStatus?: string;

  
}

export class PurchaseItemModel { 

	@serializable(alias('id', primitive()))
	id?: number;

	@serializable(alias('name', primitive()))
	name?: string;

	@serializable(alias('no_of_items', primitive()))
	noOfItems?: number;

	@serializable(alias('amount', primitive()))
	amount?: number;

}
export class PurchasePaymentLogModel { 

	@serializable(alias('id', primitive()))
	id?: number;

	@serializable(alias('created_at', primitive()))
	createdAt?: string;

	@serializable(alias('mode', primitive()))
	mode?: string;

	@serializable(alias('transaction_id', primitive()))
	transactionId?: string;

	@serializable(alias('amount', primitive()))
	amount?: number;

}

export class PurchaseVendorSettlementModel { 

	@serializable(alias('id', primitive()))
	id?: number;

	@serializable(alias('total_amount', primitive()))
	totalAmount?: number;

	@serializable(alias('status', primitive()))
	status?: string;

}

export class PurchaseCustomerModel {
  @serializable(alias("id", primitive()))
  id?: number;

  @serializable(alias("full_name", primitive()))
  fullName?: string;

  @serializable(alias("national_id", primitive()))
  nationalId?: number;

  @serializable(alias("mobile_number", primitive()))
  mobileNumber?: string;

  @serializable(alias("email", primitive()))
  email?: string;

  @serializable(alias("status", primitive()))
  status?: string;

  @serializable(alias("customer_payment_status", primitive()))
  customerPaymentStatus?: BadgeTypes;
}

export class PurchaseInstoreModel { 

	@serializable(alias('id', primitive()))
	id?: number;

	@serializable(alias('name', primitive()))
	name?: string;

}

export class PurchaseVendorModel { 

	@serializable(alias('id', primitive()))
	id?: number;

	@serializable(alias('logo_url', primitive()))
	logoUrl?: string;

	@serializable(alias('name', primitive()))
	name?: string;

	@serializable(alias('type', primitive()))
	type?: VendorTypes;

	@serializable(alias('vendor_settelment_status', primitive()))
	vendorSettelmentStatus?: BadgeTypes;

	@serializable(alias('instore', object(PurchaseInstoreModel)))
	instore?: PurchaseInstoreModel;

}

export class PurchaseModel {
  @serializable(alias("id", primitive()))
  id?: number;

  @serializable(alias("purchase_id", primitive()))
  purchaseId?: string;

  @serializable(alias("created_at", primitive()))
  createdAt?: string;

  @serializable(alias("customer", object(PurchaseCustomerModel)))
  customer?: PurchaseCustomerModel;

  @serializable(alias("vendor", object(PurchaseVendorModel)))
  vendor?: PurchaseVendorModel;

  @serializable(alias("purchase_items", list(object(PurchaseItemModel))))
  purchaseItems?: PurchaseItemModel[] = [];

  @serializable(alias("customer_processing_fee", primitive()))
  customerProcessingFee?: number;

  @serializable(alias("total_amount", primitive()))
  totalAmount?: number;

  @serializable(alias("purchase_status", primitive()))
  purchaseStatus?: string;

  @serializable(alias("payment_logs", list(object(PurchasePaymentLogModel))))
  paymentLogs?: PurchasePaymentLogModel[] = [];

  @serializable(alias("vendor_settlements", list(object(PurchaseVendorSettlementModel))))
  vendorSettlements?: PurchaseVendorSettlementModel[] = [];
}
