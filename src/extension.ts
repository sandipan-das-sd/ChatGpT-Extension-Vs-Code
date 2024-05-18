import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    const startCommand = vscode.commands.registerCommand('chatgptai.start', () => {
        const panel = vscode.window.createWebviewPanel(
            'chatgptai',
            'ChatGPT AI Chat',
            vscode.ViewColumn.One,
            {}
        );

        panel.webview.html = getWebviewContent();
    });

    context.subscriptions.push(startCommand);
}

function getWebviewContent() {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>ChatGPT AI Chat</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                padding: 10px;
            }
            .chat-container {
                max-width: 800px;
                margin: auto;
            }
            .message {
                margin: 5px 0;
                padding: 10px;
                border-radius: 5px;
            }
            .user {
                background-color: #e1f5fe;
                text-align: right;
            }
            .ai {
                background-color: #f1f8e9;
                text-align: left;
            }
        </style>
    </head>
    <body>
        <div class="chat-container">
            <div class="message user">User: Hello AI!</div>
            <div class="message ai">AI: Hello! How can I assist you today?</div>
        </div>
    </body>
    </html>`;
}

export function deactivate() {}
