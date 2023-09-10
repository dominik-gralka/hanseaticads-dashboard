import {
    Table,
    TableHead,
    TableRow,
    TableHeaderCell,
    TableBody,
    TableCell,
    Text
  } from '@tremor/react';

  
export default function DummyTable() {
    return (
        <div className='blur-sm select-none'>
            <Table>
            <TableHead>
                <TableRow>
                    <TableHeaderCell>Name</TableHeaderCell>
                    <TableHeaderCell>Username</TableHeaderCell>
                    <TableHeaderCell>Email</TableHeaderCell>
                </TableRow>
            </TableHead>
            <TableBody>
                
                {/* Generate some dummy data */}
                    {Array.from(Array(10).keys()).map((i) => (
                            <TableRow key={i}>
                                    <TableCell>{`Name ${i}`}</TableCell>
                                    <TableCell>
                                            <Text>{`Username ${i}`}</Text>
                                    </TableCell>
                                    <TableCell>
                                            <Text>{`Email ${i}`}</Text>
                                    </TableCell>
                            </TableRow>
                    ))}

            </TableBody>
        </Table>
        </div>
    );
}
  