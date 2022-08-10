//
//  scannerModule.swift
//  scannerModule
//
//  Copyright © 2022 Wits Innovation. All rights reserved.
//

import Foundation

@objc(scannerModule)
class scannerModule: NSObject {
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["count": 1]
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
