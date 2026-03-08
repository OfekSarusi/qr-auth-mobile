// Represents the user object returned from the backend after resolving the QR token
export interface User {
  user_id: string;
  full_name: string;
  email: string;
  company: string;
  account_creation_date: string;
  department: string;
  account_status: string;
  last_login_time: string;
}