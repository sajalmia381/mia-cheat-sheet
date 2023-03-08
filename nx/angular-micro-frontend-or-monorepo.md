# Angular mono repo micro-frontend

Source: https://nx.dev/recipes/module-federation/dynamic-module-federation-with-angular

## 01. Create Nx Workspace

```bash
npx create-nx-workspace [workspace-name] --preset=ts
```

```bash
✔ Choose what to create                 · integrated
✔ What to create in the new workspace   · angular-monorepo
✔ Application name                      · dashboard
✔ Would you like to use Standalone Components in your application? · No
✔ Would you like to add routing? · Yes
✔ Default stylesheet format             · scss
✔ Enable distributed caching to make your CI faster · Yes

```

Delete Existing Dashboard Module

## 02. Generate Host Dashboard

```bash
npx nx g @nrwl/angular:host dashboard
```

```bash

>  NX  Generating @nrwl/angular:host

✔ Which stylesheet format would you like to use? · scss
```

## 03. Add Remote Login Component

```bash
npx nx g @nrwl/angular:remote login --host=dashboard
```

```bash

>  NX  Generating @nrwl/angular:remote

✔ Which stylesheet format would you like to use? · scss
```

## 04. Add User Lib

### Add User Library

```bash
nx g @nrwl/angular:lib shared/data-access-user
```

### Add User Service

```bash
npx nx g @nrwl/angular:service user --project=shared-data-access-user
```

## 05. Serve Application

### Serve Dashboard as Host

```bash
nx run dashboard:serve:development --devRemotes=login
```

### Serve Login as Remote // Not Need

```bash
nx run login:serve:development
```
