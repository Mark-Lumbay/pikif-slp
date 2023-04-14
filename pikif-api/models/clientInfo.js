export default class ClientInfo {
  constructor(
    id,
    interviewDate,
    firstName,
    middleName,
    lastName,
    status,
    age,
    sex,
    address,
    birthDate,
    birthPlace,
    religion,
    contactNum,
    educAttn,
    categoryObj
  ) {
    (this.id = id),
      (this.interviewDate = interviewDate),
      (this.firstName = firstName),
      (this.middleName = middleName),
      (this.lastName = lastName),
      (this.status = status),
      (this.age = age),
      (this.sex = sex),
      (this.address = address),
      (this.birthDate = birthDate),
      (this.birthPlace = birthPlace),
      (this.religion = religion),
      (this.contactNum = contactNum),
      (this.educAttn = educAttn),
      (this.categoryObj = categoryObj);
  }
}
