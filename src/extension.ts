import * as vscode from 'vscode';
import { dirname } from 'path';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('extension.reportSummaryOnCurrentFile', () => {
		
		let editor = vscode.window.activeTextEditor;
		if (!editor) {
			vscode.window.showErrorMessage('Run this command on the open editor.');
		return;
		}

		let fileName = editor.document.fileName.replace(/^.*[\\\/]/, '');

		if (!isFileReport(fileName)) {
			vscode.window.showErrorMessage('Not report file');
			return;
		}
		let reportName = fileName.replace('.rdl','');
		getReportPath(reportName, (result: string) => {
			let a = 0;
		});
		const sql = require('mssql');

			try {
					// make sure that any items are correctly URL encoded in the connection string
					sql.connect('Server=TPCSQLDEV1\\DEV;Database=ReportServer;Trusted_Connection=True;');
					const result = sql.query`select 1 as test`;
					console.dir(result);
			} catch (err) {
					// ... error checks
			}
		// getReportPath(reportName);
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}

export function isFileReport(fileName: string,) {
	if (fileName.endsWith('.rdl')) {
		return true;
	}
	return false;
}

export async function getReportPath(reportName: string, cb: any) {

  const sql = require("mssql/msnodesqlv8");
  const conn = new sql.ConnectionPool({
  database: "ReportServer",
  server: "TPCSQLDEV1\\DEV",
  driver: "msnodesqlv8",
  options: {
    trustedConnection: true
  }
});

conn.connect().then(() => {
 //
});
}