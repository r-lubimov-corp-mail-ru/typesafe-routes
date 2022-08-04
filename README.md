# typesafe-routes

Inspired by [typesafe-react-router](https://github.com/AveroLLC/typesafe-react-router)
A set of types and utility functions to simplify routing using types in react-router

## Installation

```bash
npm install --D typesafe-routes
```

## Usage

- Typifies gives necessary type for a route
- You can quickly rename any section with `withAddParts`
- Allows you not to forget named parameters, will work out the TS error when creating
- Allows you to specify query parameters that should be used on a page

```tsx
import { route, param } from '@pulse/typesafe-router';

/**
 * Initialize routes
 */
const items = route('items');
const itemsEdit = item.withAddParts(param('id'));
const itemsList = route('items', param('component')).withQueryParams('page');

/**
 * Usage in routes:
 * items.template() -> /items
 * itemsEdit.template() -> /items/:id
 * itemsList.template() -> /items/:component
 */

<Route path={itemsList.template()} component={ListPage} />
<Route path={itemsEdit.template()} component={EditPage} />
<Redirect path={items.template()} to={itemsList.create({ component: 'tab' })} />

/**
 * Usage in links:
 * itemsList.create({}, { page: '1' }) -> /items?page=1
 * itemsEdit.create({ id: '1' }) -> /items/1
 */

<a href={items.create({})}>Root</a>
<a href={itemsList.create({ component: 'tab' }, { page: '1' })}>List</a>
<a href={itemsEdit.create({ id: '1' })}>Edit</a>
```
