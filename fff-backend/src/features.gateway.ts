import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Logger } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiProperty, ApiResponse, ApiTags, ApiOperation } from '@nestjs/swagger';
@WebSocketGateway({cors: true})
export class FeaturesGateway {
    @WebSocketServer() server;

    @ApiTags("Feature socket")
    @ApiOperation({ summary: 'summary goes here' })
    @ApiOkResponse()
    @SubscribeMessage('features')
    handeMessage(@MessageBody() message: string): void {
        this.server.emit('featureFlags', message);

        console.log(message);
        if(message == "Red_enable") {

            this.server.emit("featureFlags", "red_feature_on");
        }
        if(message == "Red_disable") {
            this.server.emit("featureFlags", "red_feature_off");
        }


        if(message == "Green_enable") {

            this.server.emit("featureFlags", {red_feature:true});
        }
        if(message == "Green_disable") {
            this.server.emit("featureFlags", {red_feature:false});
        }


        if(message == "Blue_enable") {

            this.server.emit("featureFlags", {blue_feature:true});
        }
        if(message == "Blue_disable") {
            this.server.emit("featureFlags", {blue_feature:false});
        }

        if(message == "all_enable") {

            this.server.emit("featureFlags", {red_feature:true, green_feature:true, blue_feature:true});
        }
        if(message == "all_disable") {
            this.server.emit("featureFlags", {red_feature:false, green_feature:false, blue_feature:false});
        }


    }
}