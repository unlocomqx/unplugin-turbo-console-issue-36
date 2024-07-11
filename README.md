# unplugin-turbo-console-issue-36

## Steps to reproduce

```
git clone https://github.com/unplugin/unplugin-turbo-console
cd unplugin-turbo-console
pnpm i
run dev
```

Open [http://localhost:5173/](http://localhost:5173/) in browser, and open the console.

**Expected**: [Server log] Loading the homepage   
**Actual**: (nothing is displayed in the console)

Click the /test link, it will navigate to the test page while preserving the websocket and the message is then displayed
correctly.