export const esAdminRole = async (req, res, next) => {

  const { name, role } = req.usuario

  if (role !='ADMIN_ROLE') {
    return res.status(401).json({
      msg: `${name} no tiene permiso!`
    })
  }
  next()
};
