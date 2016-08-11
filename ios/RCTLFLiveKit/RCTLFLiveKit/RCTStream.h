//
//  RCTStream.h
//  RCTLFLiveKit
//
//  Created by 권오빈 on 2016. 8. 10..
//  Copyright © 2016년 권오빈. All rights reserved.
//

#import <UIKit/UIKit.h>

@class RCTStreamManager;

@interface RCTStream : UIView

- (id) initWithManager: (RCTStreamManager*) manager bridge:(RCTBridge *) bridge;

@end