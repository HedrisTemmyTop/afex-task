import Cipher from "@ibnlanre/cipher";
const encryption_key: string = "uEKBcN7kMKayW6SF8d0BtaJq60Musbp0";
const initialization_vector: string = "hA7wB3e4v87ihj6R";

const do_decrypt = (data: any) => {
  const cipher = new Cipher({
    initialization_vector,
    algorithm: "aes-256-cbc",
    output_decoding: "base64",
    input_encoding: "utf-8",
    encryption_key,
  });
  const { decrypt } = cipher;

  console.log(decrypt(data));
  return decrypt(data);
};

export default do_decrypt;
