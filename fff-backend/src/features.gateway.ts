import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
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
    }
}