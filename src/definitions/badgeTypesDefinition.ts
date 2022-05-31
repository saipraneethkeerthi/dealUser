import { BadgeTypes } from "../enums/badgeTypes";

export const BadgeTypesDefinition = {
    [BadgeTypes.ACTIVE]: "Active",
    [BadgeTypes.APPROVED]: "Appproved",
    [BadgeTypes.INACTIVE]: "Inactive",
    [BadgeTypes.COMPLETED]: "Completed",
    [BadgeTypes.REFUND_COMPLETED]: "Refund Completed",
    [BadgeTypes.PURCHASED]: "Purchased",
    [BadgeTypes.PARTIAL_RETURN]: "Partial Return",
    [BadgeTypes.PENDING_APPROVAL]:"Pending Approval",
    [BadgeTypes.PENDING_SETTLEMENT]: "Pending Settlement",
    [BadgeTypes.OUTSTANDING_PAYMENT]: "Outstanding Payment",
    [BadgeTypes.RETURNED]: "Returned",
    [BadgeTypes.RETURN_CANCELLED]: "Return Cancelled",
    [BadgeTypes.OVERDUE]: "Overdue",
    [BadgeTypes.OUTSTANDING]: "Outstanding",
    [BadgeTypes.SETTLED]: "Settled",
    [BadgeTypes.REJECTED]: "Rejected",
    [BadgeTypes.PENDING]: "Pending",
    [BadgeTypes.ADMIN]:"Admin",
    [BadgeTypes.INTERNAL_USER]:"Internal Users"
}