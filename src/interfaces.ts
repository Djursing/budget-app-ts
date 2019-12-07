// https://medium.com/javascript-in-plain-english/how-to-build-a-budget-app-with-react-typescript-web-storage-api-pt-1-433d72b72248


// BudgetItemObj Interface
export interface BudgetItemObjInterface {
  id: string;
  date: string;
  isPaid: boolean;
  price: number;
  title: string;
}

// BudgetList Interface
export interface BudgetListInterface {
  budgetCurrency: string;
  budgetItems: BudgetItemObjInterface[];
  handleItemUpdate: (
    value: string,
    id: string,
    itemProperty: string) => void;
  handleItemRemove: (id: string) => void;
}

// BudgetItem Interface
export interface BudgetItemInterface {
  budgetCurrency: string;
  budgetItem: BudgetItemObjInterface;
  handleItemUpdate: (
    value: string,
    id: string,
    itemProperty: string) => void;
  handleItemRemove: (id: string) => void;
}

// BudgetTotal Interface
export interface BudgetTotalInterface {
  budgetPeriod: string;
  budgetAmount: number;
  budgetPaid: number;
  budgetCurrency: string;
} 

// HomePage Interface
export interface HomePageInterface {
  budgetItem: BudgetItemInterface[];
  budgetAmount: number;
  budgetPeriod: string;
  budgetCurrency: string;
  storageMethod: string;
  setBudgetItems: React.Dispatch<React.SetStateAction<BudgetItemObjInterface[]>>;
}

// SettingsPage Interface
export interface SettingsPageInterface {
  budgetAmount: number;
  budgetPeriod: string;
  budgetCurrency: string;
  storageMethod: string;
  setBudgetPeriod: React.Dispatch<React.SetStateAction<string>>;
  setBudgetCurrency: React.Dispatch<React.SetStateAction<string>>;
  setBudgetAmount: React.Dispatch<React.SetStateAction<number>>;  
  setStorageMethod: React.Dispatch<React.SetStateAction<string>>;
}

// BudgetItemAdd Interface
export interface BudgetItemAddInterface {
  showAddItem: boolean;
  handleAddItem: (payload: BudgetItemObjInterface) => void;
  handleShowAddItem: React.Dispatch<React.SetStateAction<boolean>>;
}