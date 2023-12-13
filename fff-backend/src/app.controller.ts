import { Controller, Get } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';
import {V1, V2, V3, V4} from './app.responses';
@ApiTags("Get Features")
@Controller("api")
export class AppController {
  // constructor(private readonly appService: AppService) {}
  // routes
  @ApiOkResponse({type: V1})
  @Get("v1")
  getV1() {
    var res: V1 = {FeatureRed:true, FeatureBlue:false, FeatureGreen:false}
    return res
  }

  @ApiOkResponse({type: V2})
  // routes
  @Get("v2")
  getV2() {
    return {
      "features" : {
        "feature_red":false,
        "feature_green":true,
        "feature_blue":false
      }
    }
  }
  @ApiOkResponse({type: V3})
  // routes
  @Get("v3")
  getV3() {
    return {
      "features" : {
        "feature_red":false,
        "feature_green":false,
        "feature_blue":true
      }
    }
  }
  @ApiOkResponse({type: V4})
  @Get("v4")
  getV4() {
    return {
      "features" : {
        "feature_red":false,
        "feature_green":false,
        "feature_blue":true
      }
    }
  }
}


