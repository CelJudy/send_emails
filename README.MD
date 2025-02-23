
# Send emails


A little script to send multi emails with atach file from an excel file

## Install node

install node from https://nodejs.org/en/download/prebuilt-binaries

then execute in terminal to validate that node installed correctly
```bash
  node -v
```


## Prepare project

### Files

- paste a excel file called **correos.xlsx** in project root folder. This file must be like (first column addressee, second column attached file, without headers):


| `fulanito@mail.com` | `file.pdf`|
| :--------           | :-------  | 
| `sutanito@mail.com` | `doc.pdf`  |

- paste attach files in folder **files**

### Modify index

Edit index.html to create the email body in html format

### Execute project

- inside project folder execute in terminal to install dependencies

```bash
  npm install
```

- and then run script

```bash
  node index.js
```

- when an email send successfully, will see in terminal a message like

```bash
  OK: fulanito@mail.com
```

- when an email had an error, will see in terminal some like:

```bash
  -------------
  ERROR: fulanito@mail.com
  error description
  -------------
```