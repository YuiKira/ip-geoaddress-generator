import { Button, Text, Table } from '@radix-ui/themes';
import { TrashIcon } from '@radix-ui/react-icons';
import { ADDRESS_FIELDS } from 'app/constants/addressFields';

export default function AddressRow({ addr, deleteAddress }) {
    return (
        <Table.Row>
            <Table.Cell style={{ width: '80%' }}>
                <Text size="2">
                    {ADDRESS_FIELDS.map(field => addr[field]).join(',')}
                </Text>
            </Table.Cell>
            <Table.Cell style={{ width: '20%' }}>
                <Button variant="soft" color="red" onClick={() => deleteAddress(addr.id)} size="2">
                    <TrashIcon />
                    删除
                </Button>
            </Table.Cell>
        </Table.Row>
    );
}