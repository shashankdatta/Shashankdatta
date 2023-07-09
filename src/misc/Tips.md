## Commands to check unused and upgradeable packages:

1. To list all the outdated packages in the project

   ```cli
   npm outdated
   ```

2. To list all the outdated `gloabal` packages in the project

   ```cli
   npm outdated -g
   ```

3. To list all the unused packages in the project

   ```cli
   npm-check
   ```

4. To list all the updateable packages in the project

   ```cli
   npm-check -u
   ```

5. To list all the unused & updateable global packages in the project

   ```cli
   npm-check -g
   ```

   OR

   ```cli
   npm-check -g -u
   ```

### ⚠️ **Warning**: When using the `npm-check` command, be aware that installed packages, even if only imported and not actively used, will still be considered as being used and will not appear in the list.
