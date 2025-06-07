// Define the Product type based on Requirement.md
export interface Product {
  id: string; // Or number, depending on your API
  insuranceType: string;
  coverageType: string; // This will also serve as the Title
  description: string;
  pricing: number;
}

// Options for Comboboxes
export interface ComboboxOption {
  value: string;
  label: string;
}

// Mock data for initial display
export const mockProducts: Product[] = [
  {
    id: '1',
    insuranceType: 'Motor',
    coverageType: 'Comprehensive',
    description: 'Full coverage for motor vehicles',
    pricing: 1200.50,
  },
  {
    id: '2',
    insuranceType: 'Health',
    coverageType: 'Individual Basic',
    description: 'Basic health coverage for individuals',
    pricing: 300.00,
  },
  {
    id: '3',
    insuranceType: 'Life',
    coverageType: 'Term Life 20 Years',
    description: '20-year term life insurance policy',
    pricing: 50.00,
  },
];

export const insuranceTypeOptions: ComboboxOption[] = [
  { value: 'motor', label: 'Motor' },
  { value: 'health', label: 'Health' },
  { value: 'life', label: 'Life' },
  { value: 'travel', label: 'Travel' },
  { value: 'property', label: 'Property' },
];

// TODO: Coverage types might be dependent on selected insurance type in a real app
export const coverageTypeOptions: ComboboxOption[] = [
  { value: 'third_party', label: 'Third Party' },
  { value: 'comprehensive', label: 'Comprehensive' },
  { value: 'individual_basic', label: 'Individual Basic' },
  { value: 'family_floater', label: 'Family Floater' },
  { value: 'term_life_20', label: 'Term Life 20 Years' },
  { value: 'whole_life', label: 'Whole Life' },
];
