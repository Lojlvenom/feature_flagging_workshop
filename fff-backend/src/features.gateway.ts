import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { ApiBody, ApiOkResponse, ApiProperty, ApiResponse, ApiTags, ApiOperation } from '@nestjs/swagger';
@WebSocketGateway({cors: true})
export class FeaturesGateway {
    @WebSocketServer() server;

    
    @SubscribeMessage('features')
    handeMessage(@MessageBody() message: string): void {
        this.server.emit('featureFlags', message);
    }


    @SubscribeMessage('fabiano')
    handleMessages(@MessageBody() message: string): void {
        console.log(`Oi, eu sou o Fabiano, voce disse ${message}`);
    }
}