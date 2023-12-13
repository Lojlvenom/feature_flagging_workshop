import { ApiBody, ApiOkResponse, ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';

export class V1 {
    @ApiProperty({example: true})
    FeatureRed:boolean;
  
    @ApiProperty({example: false})
    FeatureGreen:boolean;
    
    @ApiProperty({example: false})
    FeatureBlue:boolean;
    
  }

  export class V2 {
    @ApiProperty({example: false})
    FeatureRed:boolean;
  
    @ApiProperty({example: true})
    FeatureGreen:boolean;
    
    @ApiProperty({example: false})
    FeatureBlue:boolean;
    
  }

  export class V3 {
    @ApiProperty({example: false})
    FeatureRed:boolean;
  
    @ApiProperty({example: false})
    FeatureGreen:boolean;
    
    @ApiProperty({example: true})
    FeatureBlue:boolean;
    
  }

  export class V4 {
    @ApiProperty({example: true})
    FeatureRed:boolean;
  
    @ApiProperty({example: true})
    FeatureGreen:boolean;
    
    @ApiProperty({example: true})
    FeatureBlue:boolean;
    
  }