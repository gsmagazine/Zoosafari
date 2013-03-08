/**
* Appcelerator Titanium Mobile
* This is generated code. Do not modify. Your changes *will* be lost.
* Generated code is Copyright (c) 2009-2011 by Appcelerator, Inc.
* All Rights Reserved.
*/
#import <Foundation/Foundation.h>
#import "TiUtils.h"
#import "ApplicationDefaults.h"
 
@implementation ApplicationDefaults
  
+ (NSMutableDictionary*) copyDefaults
{
    NSMutableDictionary * _property = [[NSMutableDictionary alloc] init];

    [_property setObject:[TiUtils stringValue:@"E3DCewZTJqPS0RQ7iWp6BFSOsVfNc7re"] forKey:@"acs-oauth-secret-production"];
    [_property setObject:[TiUtils stringValue:@"KeW2nUxF6exwFbfAP23JVA4iEMgP2kch"] forKey:@"acs-oauth-key-production"];
    [_property setObject:[TiUtils stringValue:@"x0kjZuAknulgtEvG5BGcHLOJ3Qt3G9gB"] forKey:@"acs-api-key-production"];
    [_property setObject:[TiUtils stringValue:@"s3vkgow07ZEYHhjHuoIQ1KhsHQb6FK1T"] forKey:@"acs-oauth-secret-development"];
    [_property setObject:[TiUtils stringValue:@"inLu02bdshFT6ajA8xpIN957oF9bA1xA"] forKey:@"acs-oauth-key-development"];
    [_property setObject:[TiUtils stringValue:@"rpel2Kkje4b1o05tjhbAz39kS6f64Mpz"] forKey:@"acs-api-key-development"];
    [_property setObject:[TiUtils stringValue:@"system"] forKey:@"ti.ui.defaultunit"];

    return _property;
}
@end
