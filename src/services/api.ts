import request from "./request";

class ProtocolAPI {
  static list = async (): Promise<any> => {
    const { data } = await request.get('/list');

    return data;
  };

  static create = async (values: Protocol.Create): Promise<any> => {
    const { data } = await request.post('/create', values);

    return data;
  };
}
export default ProtocolAPI;
