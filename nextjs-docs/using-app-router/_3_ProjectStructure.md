# Project structure and organization

This page provides an overview of `all` the folder and file conventions in Next.js, and recommendations for organizing your project.

## Folder and file conventions

### Top-level folders

### Top-level files

### Routing Files

### Nested routes

Folders define URL segments. Nesting folders nests segments. Layouts at any level wrap their child segments. A route becomes public when a `page` or `route` file exists.

### Dynamic routes

Parameterize segments with square brackets. Use `[segment]` for a single param, `[...segment]` for catch‑all, and `[[...segment]]` for optional catch‑all. Access values via the params prop.

### Route groups and private folders

### Parallel and Intercepted Routes

### Metadata file conventions

## Organizing your project

### Component Hierarchy

### Colocation

### Private folders

### Route groups

### `src` folder

## Examples

### Store project files outside of `app`

### Store project files in top-level folders inside of `src`

### Split project files by feature or route

### Organize routes without affecting the URL path

### Opting specific segments into a layout

### Opting for loading skeletons on a specific route

### Creating multiple root layouts
