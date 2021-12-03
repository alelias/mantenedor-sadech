import React from 'react';

const Content = () => {
    return ( 
<div className="wrapper">
  {/* Navbar */}


  {/* Content Wrapper. Contains page content */}
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
           
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Inicio</a></li>
              <li className="breadcrumb-item active">Ciudades</li>
            </ol>
          </div>
        </div>
      </div>{/* /.container-fluid */}
    </section>
    {/* Main content */}
    <section className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Listado de Ciudades</h3>
              </div>
              {/* /.card-header */}
              <div className="card-body">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th style={{width: 10}}>#</th>
                      <th>Ciudad</th>
                      <th>Region</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1.</td>
                      <td>Santiago</td>
                      <td>Metropolitana</td>
                      <td>
                        <button type="button" class="btn btn-block btn-success">Editar</button>
                      </td>
                      <td>
                        <button type="button" class="btn btn-block btn-danger">Eliminar</button>
                      </td>
                    </tr>
                    <tr>
                      <td>2.</td>
                      <td>Puerto Montt</td>
                      <td>Los Lagos</td>
                      <td>
                        <button type="button" class="btn btn-block btn-success">Editar</button>
                      </td>
                      <td>
                        <button type="button" class="btn btn-block btn-danger">Eliminar</button>
                      </td>
                    </tr>
                    <tr>
                      <td>3.</td>
                      <td>Valdivia</td>
                      <td>Los Rios</td>
                      <td>
                        <button type="button" class="btn btn-block btn-success">Editar</button>
                      </td>
                      <td>
                        <button type="button" class="btn btn-block btn-danger">Eliminar</button>
                      </td>
                    </tr>
                    <tr>
                      <td>4.</td>
                      <td>Talca</td>
                      <td>Maule</td>
                      <td>
                        <button type="button" class="btn btn-block btn-success">Editar</button>
                      </td>
                      <td>
                        <button type="button" class="btn btn-block btn-danger">Eliminar</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* /.card-body */}
              <div className="card-footer clearfix">
                <ul className="pagination pagination-sm m-0 float-right">
                  <li className="page-item"><a className="page-link" href="#">«</a></li>
                  <li className="page-item"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item"><a className="page-link" href="#">»</a></li>
                </ul>
              </div>
            </div>
            {/* /.card */}
           
            {/* /.card */}
          </div>
          {/* /.col */}
        
          {/* /.col */}
        </div>
    
        {/* /.row */}
      </div>{/* /.container-fluid */}
    </section>
    {/* /.content */}
  </div>
  {/* /.content-wrapper */}
</div>

     );
}
 
export default Content;