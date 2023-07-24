export default function Python( {value} ) {

    return(
            <>
                <div
                    dangerouslySetInnerHTML={{
                                                __html: `<py-script>${value}</py-script>`,
                                            }}
                />
            </>
          );

};