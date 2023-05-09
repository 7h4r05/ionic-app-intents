

import AppIntents
import SwiftUI

struct ReserveTableIntent: AppIntent {
    static var title: LocalizedStringResource = "Reserve a table"
    static var description = IntentDescription("Reserve a table at restaurant")
    
    @MainActor
    func perform() async throws -> some IntentResult {
        return .result(            
            view: ReserveTableIntentView()
        )
    }
}
