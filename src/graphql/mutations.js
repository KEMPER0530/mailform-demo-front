export const createNuxtMail = `
  mutation createNuxtMailToLambda(
    $from: String,
    $to: String,
    $subject: String,
    $body: String,
    $createdat: String,
    $updatedat: String
  ) {
    createNuxtMailToLambda(body: $body, from: $from, subject: $subject, to: $to,
                           createdat: $createdat, updatedat: $updatedat)
    {
      responce
      result
    }
  }`;