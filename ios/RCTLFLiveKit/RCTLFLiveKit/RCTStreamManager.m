//
//  RCTStreamManager.m
//  RCTLFLiveKit
//
//  Created by 권오빈 on 2016. 8. 9..
//  Copyright © 2016년 권오빈. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridge.h>
#import "RCTStreamManager.h"
//#import "LFLivePreview.h"
#import "RCTStream.h"

@implementation RCTStreamManager

RCT_EXPORT_MODULE();

- (UIView *) view
{
    return [[RCTStream alloc] initWithManager:self bridge:self.bridge];
}

- (NSArray *) customDirectEventTypes
{
    return @[
             @"onReady",
             @"onPending",
             @"onStart",
             @"onError",
             @"onStop"
            ];
}

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}

RCT_EXPORT_VIEW_PROPERTY(started, BOOL);
RCT_EXPORT_VIEW_PROPERTY(cameraFronted, BOOL);
RCT_EXPORT_VIEW_PROPERTY(url, NSString);
RCT_EXPORT_VIEW_PROPERTY(landscape, BOOL);

@end
