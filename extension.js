const vscode = require('vscode')

function activate(context) {
	console.log('Congratulations, your extension "inline-html-indent" is now active!')
	const disposable = vscode.commands.registerCommand('inline-html-indent.htmlInlineIndent', async () => {
		const editor = vscode.window.activeTextEditor
		const cursorPosition = editor.selection.start
		const cursorPositione = editor.selection.end
		const wordRange = new vscode.Range(cursorPosition, cursorPositione)
		const langId = editor.document.languageId
		await vscode.languages.setTextDocumentLanguage(editor.document, 'html')
		await vscode.commands.executeCommand('editor.action.reindentselectedlines')
		await vscode.languages.setTextDocumentLanguage(editor.document, langId)
	})
	context.subscriptions.push(disposable)
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}