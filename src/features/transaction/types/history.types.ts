export interface History {
  offset: number;
  limit: string;
  records: Record[];
}

export interface Record {
  invoice_number: string;
  transaction_type: string;
  description: string;
  total_amount: number;
  created_on: string;
}
