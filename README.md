# inline-html-indent 

[https://marketplace.visualstudio.com/items?itemName=vulkd.inline-html-indent](https://marketplace.visualstudio.com/items?itemName=vulkd.inline-html-indent)

## About & Usage
 - Created quickly to fill a need of indenting inline html in javascript template strings.
 - Select any HTML / XML. Open and choose `HTML Inline Indent` from the command palette.
 - Uses VSCode's inbuilt indent logic for HTML

## Example Before and After:
```html
const z = `

<div>
<p>asd
</p>
    </div>

    <style scoped>
    .asd {
        background: red;
        color: #123456;
    }
    </style>
    
    <script type='text/javascript'>const a = 1;
    
    const b = () => { return new Promise((resolve, 
        reject) => {
            3 < 4 ? resolve() : reject()
        })}
        
        </script>

        <div>

            <div>

                <div>
                </div>
            </div>
        </div>
`
```

```html
const z = `

<div>
    <p>asd
    </p>
</div>

<style scoped>
    .asd {
        background: red;
        color: #123456;
    }
</style>

<script type='text/javascript'>const a = 1;
    
    const b = () => { return new Promise((resolve, 
        reject) => {
            3 < 4 ? resolve() : reject()
        })}
        
    </script>
    
    <div>
        
        <div>
            
            <div>
            </div>
        </div>
    </div>
`
```
