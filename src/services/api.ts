import request from "./request";

class ProtocolAPI {
  static list = async (): Promise<any> => {
    const { data } = await request.get('/list');

    return data;
  };
}
export default ProtocolAPI;
