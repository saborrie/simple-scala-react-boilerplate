import org.http4s.server.Server
import org.http4s.server.blaze.BlazeBuilder

object WebServerLauncher extends App {
    
    def launch(port: Int):Option[Server] = {
        try {
            Some(BlazeBuilder.bindHttp(port, "0.0.0.0")
                .mountService(Web.service, "/")
                .mountService(Api.service, "/api")
                .run)
        } catch {
            case e: Throwable =>
                e.printStackTrace()
                None
        }
    }

    launch(5000).foreach(_.awaitShutdown())
}