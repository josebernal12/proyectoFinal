


export const esAdminRole = async (req, res, next) => {
  const response = await userModel.findById(id);
  if (!response) {
    throw new Error(`no existe el id ${id} en la base de datos`);
  }
};
