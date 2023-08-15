## Generics

I am not sure I correctly understood the task, especially because the exampla you provided
already worked. In the end, I decided to modify the function so that it does not create a new array,
but modify the original one. Hope it is what you expected.

```ts
function transformArray<T>(arr: T[], callback: (element: T) => T): T[] {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = callback(arr[i]);
  }
}

const numberArray = [1, 2, 3, 4, 5];
transformArray(numberArray, (num) => num * 2);
console.log(numberArray); // Output: [2, 4, 6, 8, 10]

const stringArray = ['apple', 'banana', 'cherry'];
transformArray(stringArray, (str) => str.toUpperCase());
console.log(stringArray); // Output: ['APPLE', 'BANANA', 'CHERRY']

// Wrong usage example, it returns `Type 'boolean' is not assignable to type 'string'.(2322)`
const stringArray2 = ['apple', 'banana', 'cherry'];
transformArray(stringArray, (str) => !!str);
```

## Union and Intersection Types

```ts
type TBaseProduct {
    name: string;
    price: number;
    description: string;
}

type TSizeVariation = BaseProduct & {
    variationType: 'size';
    size: string;
}

type TColorVariation = BaseProduct & {
    variationType: 'color';
    color: string;
}

type TMaterialVariation = BaseProduct & {
    variationType: 'material';
    material: string;
}

type TProduct = BaseProduct | SizeVariation | ColorVariation | MaterialVariation;

// Examples
const product: TProduct = {
    name: 'T-Shirt',
    price: 29.99,
    description: 'A comfortable and stylish T-shirt.',
};

const sizeVariation: TProduct = {
    name: 'T-Shirt',
    price: 34.99,
    description: 'A comfortable and stylish T-shirt.',
    variationType: 'size',
    size: 'L',
};

const colorVariation: TProduct = {
    name: 'T-Shirt',
    price: 39.99,
    description: 'A comfortable and stylish T-shirt.',
    variationType: 'color',
    color: 'blue',
};

const materialVariation: TProduct = {
    name: 'T-Shirt',
    price: 44.99,
    description: 'A comfortable and stylish T-shirt.',
    variationType: 'material',
    material: 'cotton'
};
```

## Type Guards

```ts
interface Category {
  name: string;
}

interface Product {
  category: Category;
}

function isCategory(
  input: Category | Product | string | null,
): input is Category {
  return (input as Category).name !== undefined;
}

function isProduct(
  input: Category | Product | string | null,
): input is Product {
  return (input as Product).category !== undefined;
}

function isString(input: Category | Product | string | null): input is string {
  return typeof input === 'string' && input !== null;
}

function extractCategoryName(
  input: Category | Product | string | null,
): string | null {
  if (isCategory(input)) {
    return input.name;
  } else if (isString(input)) {
    return input;
  } else if (isProduct(input)) {
    return input.category.name;
  }

  return null;
}
```
