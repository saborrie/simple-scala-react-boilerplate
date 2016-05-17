import org.http4s._
import org.http4s.dsl._

object Api {

    val service = HttpService {
        case GET -> Root / "ping" =>
            // EntityEncoder allows for easy conversion of types to a response body
            Ok("pong")
    }

}