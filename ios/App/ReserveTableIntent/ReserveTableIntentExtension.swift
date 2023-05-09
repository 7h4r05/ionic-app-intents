import AppIntents
import UIKit

@main
struct ReserveTableExtension: AppIntentsExtension {
}

struct Shortcuts: AppShortcutsProvider {
    static var appShortcuts: [AppShortcut] {
        AppShortcut(intent: ReserveTableIntent(), phrases: ["Reserve a table"])
    }
}
