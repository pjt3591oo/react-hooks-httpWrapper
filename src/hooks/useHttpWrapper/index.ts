export interface HttpResHandler {
  success(msg: string): void;
  validate(msg: string): void;
  error(error: string): void;
}

export interface HttpRes<T> {
  data?: T;
  isSuccess: boolean;
}

function useApiWrapper(httpResHandler: HttpResHandler) {
  
  const call = async <T>(
    api: Function,
    successMsg: string = '처리완료',
    payload: any = {},
    validator: Function = () => false
  ): Promise<HttpRes<T>> => {
    let validateMsg = validator();
    if (validateMsg) {
      httpResHandler.validate(validateMsg);
      return {
        isSuccess: false
      }
    }

    try {
      let res = await api(payload);
      httpResHandler.success(successMsg);
      return {
        data: res.data,
        isSuccess: true
      }
    } catch (err) {
      httpResHandler.error(err);
      return {
        isSuccess: false
      }
    }
  }

  return {
    call
  }
}

export default useApiWrapper;